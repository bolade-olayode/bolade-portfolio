import type { StaticImageData } from 'next/image';
import twale from '@/public/work/covers/twale-landing.webp';
import albis from '@/public/work/covers/albis-care-landing.webp';
import aura from '@/public/work/covers/aura-by-nimi.webp';
import fiveStar from '@/public/work/covers/five-star-trucking.webp';
import sparkling from '@/public/work/covers/jv-sparkling.webp';
import northwest from '@/public/work/covers/northwest-cdl.webp';
import church from '@/public/work/covers/presbyterian-church.webp';
import tishow from '@/public/work/covers/tishow-beauty-spa.webp';
import ella from '@/public/work/covers/va-by-ella.webp';

// Static imports supply the actual dimensions, so frames follow their cover image.
export const previewImages: Record<string, StaticImageData> = {
    '/work/covers/twale-landing.webp': twale,
    '/work/covers/albis-care-landing.webp': albis,
    '/work/covers/aura-by-nimi.webp': aura,
    '/work/covers/five-star-trucking.webp': fiveStar,
    '/work/covers/jv-sparkling.webp': sparkling,
    '/work/covers/northwest-cdl.webp': northwest,
    '/work/covers/presbyterian-church.webp': church,
    '/work/covers/tishow-beauty-spa.webp': tishow,
    '/work/covers/va-by-ella.webp': ella,
};
