
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Blog } from '../sections/Blog';
import { Language } from '../translations';

interface BlogPageProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onSelectPost: (slug: string) => void;
}

export const BlogPage = ({ lang, setLang, onSelectPost }: BlogPageProps) => {
    return (
        <div className="bg-[#070707] min-h-screen text-gray-200">
            <Header lang={lang} setLang={setLang} />
            <main className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Blog</h1>
                    <Blog lang={lang} onSelectPost={onSelectPost} />
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
};
