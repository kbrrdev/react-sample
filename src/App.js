import Banner from './Banner'
import MenuBar from './MenuBar'
import Section1 from './Section1'
import Success from './Success'

function App() {
    const designs = [
        {
            title: 'Wix Editor | Design It Your Way',
            description:
                'Get complete design freedom with the Editor. Drag and drop technology lets you move things around your site however you’d like. Every design element is customizable. Resize, recolor, rotate and align elements to make it look just right. Then choose from 1000s of intuitive tools and built-in features to create a professional web presence.',
            linkName: 'Get Started'
        },
        {
            title: 'Wix ADI | Made for You Instantly',
            description:
                'Create a beautifully designed website in no time with Wix ADI (Artificial Design Intelligence). Just answer a few questions and you’ll get a fully designed site with content and images built-in. Make it your own by choosing a design theme and a custom color palette that fits the look you’re going for. You can always upload your own images and content to match your brand.',
            linkName: 'Get Started'
        },
        {
            title: 'Wix Marketplace | Hire a Professional',
            description:
                'Hire a Wix Partner to create a new website for you, redesign one you already have or get help with a specific project. From marketing experts who can promote your website to graphic designers who can develop your brands’ look—we’ve got the right Partner for you. Browse our library of Partners or answer a few questions here and we’ll match you with the right person.',
            linkName: 'Hire a Partner'
        }
    ]

    return (
        <div className='App'>
            <MenuBar />
            <Banner />
            <Section1
                header='Discover the Best Ways to Design Your Website'
                designs={designs}
            />
            <Success />
        </div>
    )
}

export default App
