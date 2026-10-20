'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { previewImages } from '@/lib/preview-images';

export function ScrollPreview({ cover, image, alt }: { cover: string; image?: string; alt: string }) {
    const frame = useRef<HTMLDivElement>(null);
    const [requested, setRequested] = useState(false);
    const [readyImage, setReadyImage] = useState<string>();
    const coverSource = previewImages[cover] || cover;
    const ready = !!image && readyImage === image;

    useEffect(() => {
        if (!image) return;
        const visual = frame.current?.closest('.project-visual');
        const control = frame.current?.closest('.website-gallery')?.querySelector<HTMLInputElement>('.preview-control input');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const request = () => { if (!reducedMotion.matches) setRequested(true); };
        const toggle = () => { if (control?.checked) request(); };
        visual?.addEventListener('pointerenter', request);
        visual?.addEventListener('focus', request);
        control?.addEventListener('change', toggle);
        const initial = requestAnimationFrame(() => {
            if (visual?.matches(':hover, :focus') || control?.checked) request();
        });
        return () => {
            cancelAnimationFrame(initial);
            visual?.removeEventListener('pointerenter', request);
            visual?.removeEventListener('focus', request);
            control?.removeEventListener('change', toggle);
        };
    }, [image]);

    return <div ref={frame} className={`website-screen scroll-preview${ready ? ' has-scroll-image' : ''}`}>
        <Image src={coverSource} alt={alt} width={typeof coverSource === 'string' ? 1200 : coverSource.width} height={typeof coverSource === 'string' ? 750 : coverSource.height} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) 50vw, 560px" placeholder={typeof coverSource === 'string' ? 'empty' : 'blur'} className={`preview-cover${cover === image ? ' preview-cover-crop' : ''}`} />
        {image && requested && <Image src={image} alt="" aria-hidden="true" width={1200} height={900} sizes="(max-width: 600px) 100vw, 50vw" loading="eager" unoptimized className="preview-long" onLoad={() => setReadyImage(image)} />}
    </div>;
}
