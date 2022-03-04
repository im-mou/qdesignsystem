import React from 'react';

const Code = ({ children, language }: { children: React.ReactNode; language?: 'js' | 'css' | 'html' }) => {
    return (
        <pre>
            <code className={`language-${language || 'js'}`}>{children}</code>
        </pre>
    );
};

export default Code;
