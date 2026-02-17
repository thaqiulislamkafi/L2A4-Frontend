import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

const PublicLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default PublicLayout;