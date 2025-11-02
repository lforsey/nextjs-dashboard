import SideNav from "@/app/ui/dashboard/sidenav";
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function Layout({
        children,
    }: {
        children: React.ReactNode;
    }) {
        return (
            <html lang="en">
                <body className={`${inter.className} antialiased`}>
                    <div id="test-div" className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-64">
                        <SideNav />
                    </div>
                        {/* call children to render the page content */}
                        {children}
                    </div>
                </body>
            </html>
    );
}