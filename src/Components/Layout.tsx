type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {children}
        </main>
    );
};

export default Layout;
// This Layout component serves as a wrapper for the main content of the application.
// It applies a full-screen gradient background and ensures that the content is displayed correctly across different views.  