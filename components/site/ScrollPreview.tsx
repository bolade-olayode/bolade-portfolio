import Image from 'next/image';
import { previewImages } from '@/lib/preview-images';

export function ScrollPreview({ cover, image, alt }: { cover: string; image?: string; alt: string }) {
    const coverSource = previewImages[cover] || cover;
    return <div className={`website-screen scroll-preview${image ? ' has-scroll-image' : ''}`}>
        <Image src={coverSource} alt={alt} width={typeof coverSource === 'string' ? 1200 : coverSource.width} height={typeof coverSource === 'string' ? 750 : coverSource.height} sizes="(max-width: 600px) 100vw, 50vw" className={`preview-cover${cover === image ? ' preview-cover-crop' : ''}`} />
        {image && <Image src={image} alt="" aria-hidden="true" width={1200} height={900} sizes="(max-width: 600px) 100vw, 50vw" className="preview-long" />}
    </div>;
}
