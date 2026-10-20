'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { aboutPhotos } from '@/lib/about-photos';

export function AboutPhotoStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openerRef = useRef<HTMLButtonElement | null>(null);
    const activePhoto = aboutPhotos[activeIndex];

    useEffect(() => {
        if (!isOpen) return;
        const { overflow, paddingRight } = document.body.style;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
        return () => {
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
        };
    }, [isOpen]);

    function openPhoto(index: number, event: MouseEvent<HTMLButtonElement>) {
        openerRef.current = event.currentTarget;
        setActiveIndex(index);
        dialogRef.current?.showModal();
        setIsOpen(true);
    }

    function movePhoto(direction: number) {
        setActiveIndex(index => (index + direction + aboutPhotos.length) % aboutPhotos.length);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
        if (event.key === 'Tab') {
            const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
            const first = buttons?.[0];
            const last = buttons?.[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        }
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            movePhoto(event.key === 'ArrowRight' ? 1 : -1);
        }
    }

    function handleClose() {
        setIsOpen(false);
        openerRef.current?.focus({ preventScroll: true });
    }

    return <>
        <div className="about-photo-stack" role="group" aria-label="Photos from life and running">
            {aboutPhotos.map((photo, index) => <button key={photo.id} type="button" className={`about-photo-card about-photo-${photo.id}`} aria-label={`Open photo: ${photo.title}`} aria-haspopup="dialog" aria-controls="about-photo-viewer" onClick={event => openPhoto(index, event)}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 600px) 50vw, (max-width: 800px) 30vw, 280px" />
                <span className="photo-expand" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5" /></svg></span>
            </button>)}
        </div>
        <dialog ref={dialogRef} id="about-photo-viewer" className="about-photo-dialog" aria-labelledby="about-photo-viewer-title" onClose={handleClose} onKeyDown={handleKeyDown} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
            <div className="photo-viewer-content">
                <div className="photo-viewer-toolbar"><h2 id="about-photo-viewer-title" className="sr-only">About me photo gallery</h2><output className="photo-viewer-count" aria-live="polite" aria-atomic="true">{activeIndex + 1} / {aboutPhotos.length}</output><button type="button" className="photo-viewer-close" onClick={() => dialogRef.current?.close()}>Close <span aria-hidden="true">×</span></button></div>
                <div className="photo-viewer-image"><Image key={activePhoto.id} src={activePhoto.src} alt={activePhoto.alt} fill sizes="(max-width: 1200px) 95vw, 1100px" /></div>
                <div className="photo-viewer-navigation"><button type="button" onClick={() => movePhoto(-1)} aria-label="Previous photo"><span aria-hidden="true">←</span> Previous</button><button type="button" onClick={() => movePhoto(1)} aria-label="Next photo">Next <span aria-hidden="true">→</span></button></div>
            </div>
        </dialog>
    </>;
}
