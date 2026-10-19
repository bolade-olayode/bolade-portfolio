import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';
export const alt = 'Bolade Olayode — Full-stack software engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() { return new ImageResponse(<div style={{ background: '#f8f7f3', color: '#222522', display: 'flex', flexDirection: 'column', padding: '70px 80px', width: '100%', height: '100%', justifyContent: 'space-between' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28 }}><span>bolade.</span><span style={{ fontSize: 17 }}>FULL-STACK SOFTWARE ENGINEER</span></div><div style={{ display: 'flex', flexDirection: 'column', fontSize: 68, letterSpacing: '-3px', lineHeight: 1.1 }}><span>Web platforms.</span><span>Mobile apps.</span><span style={{ color: '#344cdd' }}>Software for the day-to-day.</span></div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 21 }}><span>{site.name}</span><span>Lagos, Nigeria · Web & mobile</span></div></div>, size); }
