'use client';

import CapybaraLoader from './components/CapybaraLoader';

export default function Loading() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
            }}
        >
            <CapybaraLoader />
        </div>
    );
}
