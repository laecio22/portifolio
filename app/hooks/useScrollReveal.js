'use client';

import {  useEffect } from 'react';

const useScrollReveal = (target, options) => {
    useEffect(() => {
     if (typeof window !== 'undefined') {
       import('scrollreveal').then(({ default: ScrollReveal }) => {
                const sr = ScrollReveal();
                sr.reveal(target, options);
                
            });
     }
    }, [target, options]);
}

export default useScrollReveal;