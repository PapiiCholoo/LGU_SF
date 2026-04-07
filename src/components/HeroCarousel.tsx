import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Edit2, X, ImagePlus, Save, Trash2 } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "./ui/carousel";

interface HeroCarouselProps {
    pageId: string;
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: React.ElementType;
    defaultImages: string[];
}

export function HeroCarousel({
    pageId,
    title,
    subtitle,
    description,
    icon: Icon,
    defaultImages
}: HeroCarouselProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [api, setApi] = useState<any>();
    const [images, setImages] = useState<string[]>(defaultImages);

    // Editor State
    const [isEditing, setIsEditing] = useState(false);
    const [editorImages, setEditorImages] = useState<string[]>([]);

    useEffect(() => {
        if (isEditing) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isEditing]);

    // Handle Scroll behavior matching home page
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Autoplay
    useEffect(() => {
        if (!api) {
            return;
        }

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [api]);

    // Load custom images from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(`carousel_images_${pageId}`);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setImages(parsed);
                }
            } catch (e) {
                console.error("Failed to parse custom images from localStorage", e);
            }
        }
    }, [pageId]);

    const handleAddEditorImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const remainingSlots = 8 - editorImages.length;
        if (remainingSlots <= 0) {
            alert("You reached the maximum limit of 8 images.");
            return;
        }

        const filesToAdd = Array.from(files).slice(0, remainingSlots);

        const fileReaders: Promise<string>[] = filesToAdd.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => resolve(event.target?.result as string);
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(fileReaders)
            .then(base64Images => {
                setEditorImages(prev => [...prev, ...base64Images]);
            })
            .catch(err => {
                console.error("Error reading files", err);
                alert("Failed to read images. Please try again.");
            });
    };

    const handleSaveChanges = () => {
        setImages(editorImages);
        localStorage.setItem(`carousel_images_${pageId}`, JSON.stringify(editorImages));
        setIsEditing(false);
    };

    return (
        <section
            className={`relative text-white overflow-hidden transition-all duration-700 ease-in-out origin-top ${isScrolled ? 'h-0 opacity-0 pointer-events-none -translate-y-10' : 'h-[65dvh] lg:h-[85vh] opacity-100 translate-y-0'
                }`}
        >
            {/* Edit Images Button Overlay */}
            <div className="absolute top-4 right-4 z-50">
                <button
                    onClick={() => {
                        setEditorImages([...images]);
                        setIsEditing(true);
                    }}
                    className="bg-black/30 hover:bg-black/50 backdrop-blur-md p-3 pr-4 rounded-full flex items-center justify-center transition-all group border border-white/20 shadow-xl"
                >
                    <Edit2 className="text-white w-5 h-5" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-white font-medium pl-0 group-hover:pl-3">
                        Edit Carousel
                    </span>
                </button>
            </div>

            {/* Image Slider Background */}
            <div className="absolute inset-0 select-none group">
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    className="w-full h-full"
                >
                    <CarouselContent className="h-[65dvh] lg:h-[85vh] -ml-0">
                        {images.map((img, index) => (
                            <CarouselItem key={index} className="pl-0 h-full w-full border-none">
                                <div
                                    className="w-full h-full bg-cover bg-center md:bg-top relative"
                                    style={{
                                        backgroundImage: `url(${img})`,
                                    }}
                                >
                                    {/* Internal Dark Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-black/40" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4 lg:left-8 bg-black/20 hover:bg-black/40 border-white/30 text-white backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 z-40" />
                    <CarouselNext className="right-4 lg:right-8 bg-black/20 hover:bg-black/40 border-white/30 text-white backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 z-40" />
                </Carousel>
            </div>

            {/* Brand color atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/30 via-[#20B2AA]/20 to-[#FFD700]/20 pointer-events-none z-10"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            {/* Text Content Overlay */}
            {title && (
                <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center max-w-4xl text-center items-center pt-10 pointer-events-none">
                    <div className="inline-flex items-center gap-3 mb-6">
                        {Icon && <Icon className="text-[#FFD700] drop-shadow-xl" size={56} />}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl">
                            {title}
                        </h1>
                    </div>
                    {subtitle && (
                        <p className="text-3xl mb-6 text-white drop-shadow-xl font-medium">
                            {subtitle}
                        </p>
                    )}
                    {description && (
                        <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            )}

            {/* Decorative wave */}
            <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none translate-y-[1px]">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
                </svg>
            </div>

            {/* Editor Modal Overlay */}
            {isEditing && createPortal(
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
                        <div className="bg-[#003366] text-white p-6 flex justify-between items-center shrink-0">
                            <div>
                                <h3 className="text-2xl font-bold">Edit Carousel Images</h3>
                                <p className="text-[#00CED1] text-sm mt-1">Maximum 8 images allowed</p>
                            </div>
                            <button onClick={() => setIsEditing(false)} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-grow bg-gray-50">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {editorImages.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group border-2 border-transparent hover:border-[#00CED1] shadow-sm">
                                        <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                onClick={() => setEditorImages(prev => prev.filter((_, i) => i !== idx))}
                                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transform hover:scale-110 transition-all shadow-lg text-sm"
                                                title="Remove Image"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {editorImages.length < 8 && (
                                    <label className="aspect-video rounded-xl border-2 border-dashed border-[#00CED1] bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-[#00CED1]/5 transition-colors group">
                                        <div className="w-12 h-12 bg-[#00CED1]/10 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <ImagePlus className="text-[#00CED1]" size={24} />
                                        </div>
                                        <span className="text-[#003366] font-semibold text-sm">Add Image</span>
                                        <span className="text-gray-400 text-xs mt-1">{8 - editorImages.length} slots left</span>
                                        <input type="file" multiple accept="image/*" className="hidden" onChange={handleAddEditorImages} />
                                    </label>
                                )}
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-200 bg-white flex justify-end gap-3 shrink-0">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-6 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveChanges}
                                className="px-6 py-2.5 rounded-xl font-bold bg-[#00CED1] text-white hover:bg-[#20B2AA] transition-colors shadow-lg flex items-center gap-2"
                            >
                                <Save size={20} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
