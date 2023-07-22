import DefaultBackground from 'public/Default-background';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <DefaultBackground />
            {children}
        </>
    );
}
