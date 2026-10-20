'use client';

import { useState } from 'react';

export function CopyEmail({ email }: { email: string }) {
    const [message, setMessage] = useState('');
    async function copy() {
        try {
            await navigator.clipboard.writeText(email);
            setMessage('Email address copied.');
        } catch {
            setMessage('Could not copy automatically. Select and copy the email address above.');
        }
    }
    return <div className="copy-email"><button type="button" className="copy-email-button" onClick={copy}>Copy email address</button><p role="status" aria-live="polite">{message}</p></div>;
}
