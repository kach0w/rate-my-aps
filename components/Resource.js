import React, {useState} from 'react'
import {useEffect} from 'react'
import {db} from '../lib/firebase'
import user from '../assets/user.png'
import Image from 'next/image'
import Commentform from './Commentform';
import Footer from '../components/Footer'

const Resource = ({docname}) => {
    const [posts, setPosts] = useState([]);
    const [textbooks, setTextbooks] = useState([])
    const [khan, setKhanAcademy] = useState([])
    const [prep, setPrepBooks] = useState([])
    const [others, setOthers] = useState([])
    const [votes, setVotes] = useState({ one: 0, two: 0, three: 0, four: 0, five: 0, name: ""});
    const [gradient, setGradient] = useState({from: "", to: ""})

    useEffect(() => {
        const fetchPosts = async() => {
            const nameRef = await db.collection('votes').doc(docname).get()
            setVotes(nameRef.data())
            const postsRef = db.collection('votes').doc(docname).collection('posts').orderBy('createdAt', 'desc');
            const snapshot = await postsRef.get();
            const posts = snapshot.docs.map((doc) => ({
                id: doc.id,
                content: doc.data().content,
                author: doc.data().author,
                date: doc.data().createdAt.substring(0, 10),
            }));
            setPosts(posts);
        }
        fetchPosts();
        if(docname){
            if(docname === "chemistry"){
                setTextbooks("Chemistry: The Central Science, Zumdahl's Chemistry")
                setKhanAcademy("https://www.khanacademy.org/science/ap-chemistry")
                setPrepBooks("5 Steps to a 5: AP Chemistry, Barron's AP Chemistry")
                setOthers("Bozeman Science, ChemGuide, AP Chemistry Notes")
                setGradient({from: "#3F2B96", to: "#9bb1eb"})
            }
            if(docname === "biology"){
                setTextbooks("Campbell Biology")
                setKhanAcademy("https://www.khanacademy.org/science/ap-biology")
                setPrepBooks("5 Steps to a 5: AP Biology, Barron's AP Biology")
                setOthers("Bozeman Science, AP Biology Notes, Biology Dictionary")
                setGradient({from: "#9ebd13", to: "#008552"})
            }
            if(docname === "environmentalscience"){
                setTextbooks("Environmental Science for AP")
                setKhanAcademy("https://www.khanacademy.org/science/ap-environmental-science")
                setPrepBooks("5 Steps to a 5: AP Environmental Science, Barron's AP Environmental Science")
                setOthers("Bozeman Science, AP Environmental Science Notes, Crash Course Environmental Science, Environmental Science Dictionary")
                setGradient({from: "#9ebd13", to: "#008552"})
            }
            if(docname === "physicsone"){
                setTextbooks("Physics for AP Courses, Knight College Physics")
                setKhanAcademy("https://www.khanacademy.org/science/ap-physics-1")
                setPrepBooks("5 Steps to a 5: AP Physics 1, Barron's AP Physics 1")
                setOthers("Flipping Physics, AP Physics 1 Notes, Laufer Physics, Hyper Physics")
                setGradient({from: "#00d2ff", to: "#3a47d5"})
            }
            if(docname === "physicstwo"){
                setTextbooks("Physics for AP Course 2, Knight College Physics")
                setKhanAcademy("https://www.khanacademy.org/science/ap-physics-2")
                setPrepBooks("5 Steps to a 5: AP Physics 2, Barron's AP Physics 2")
                setOthers("Flipping Physics, AP Physics 2 Notes, Laufer Physics, Hyper Physics")
                setGradient({from: "#00d2ff", to: "#3a47d5"})
            }
            if(docname === "physicscmechanics"){
                setTextbooks("Physics for AP Courses, Knight College Physics")
                setKhanAcademy("https://www.khanacademy.org/science/ap-physics-c-mechanics")
                setPrepBooks("5 Steps to a 5: AP Physics C, Barron's AP Physics C")
                setOthers("MIT OCW,Laufer Physics, Hyper Physics")
                setGradient({from: "#00d2ff", to: "#3a47d5"})
            }
            if(docname === "physicsceandm"){
                setTextbooks("Physics for AP Courses, Knight College Physics")
                setKhanAcademy("https://www.khanacademy.org/science/ap-physics-c-electricity-and-magentism")
                setPrepBooks("5 Steps to a 5: AP Physics C, Barron's AP Physics C")
                setOthers("MIT OCW,Laufer Physics, Hyper Physics")
                setGradient({from: "#00d2ff", to: "#3a47d5"})
            }
            if(docname === "physicsceandm"){
                setTextbooks("Physics for AP Courses, Knight College Physics")
                setKhanAcademy("https://www.khanacademy.org/science/ap-physics-c-electricity-and-magentism")
                setPrepBooks("5 Steps to a 5: AP Physics C, Barron's AP Physics C")
                setOthers("MIT OCW,Laufer Physics, Hyper Physics")
            }
            if(docname === "computersciencea"){
                setTextbooks("Barron's AP Computer Science A Book, Java: The Complete Reference")
                setKhanAcademy("Only Has AP CS P")
                setPrepBooks("There are many other online resources")
                setOthers("Practice It!, CodeHS, CodingBat, AP CSA Labs, Edhesive")
                setGradient({from: "#FC466B", to: "#3F5EFB"})
            }
            if(docname === "computersciencep"){
                setTextbooks("Barron's AP Computer Science P Book, Java: The Complete Reference")
                setKhanAcademy("https://www.khanacademy.org/computing/ap-computer-science-principles")
                setPrepBooks("There are many other online resources")
                setOthers("Code.org, CodeHS, Codeacademy")
                setGradient({from: "#FC466B", to: "#3F5EFB"})
            }
            if(docname === "calculusab"){
                setTextbooks("Calculus: Graphical, Numerical, Algebraic; Saxon: Calculus")
                setKhanAcademy("https://www.khanacademy.org/math/ap-calculus-ab")
                setPrepBooks("5 Steps to a 5: AP Calculus AB")
                setOthers("Paul's Online Math Notes, PatrickJMT")
                setGradient({from: "#d53369", to: "#daae51"})
            }
            if(docname === "calculusbc"){
                setTextbooks("Calculus: Graphical, Numerical, Algebraic; Saxon: Calculus")
                setKhanAcademy("https://www.khanacademy.org/math/ap-calculus-bc")
                setPrepBooks("5 Steps to a 5: AP Calculus BC")
                setOthers("Paul's Online Math Notes, PatrickJMT")
                setGradient({from: "#d53369", to: "#daae51"})
    
            }
            if(docname === "statistics"){
                setTextbooks("The Practice of Statistics")
                setKhanAcademy("https://www.khanacademy.org/math/ap-statistics")
                setPrepBooks("5 Steps to a 5: AP Statistics")
                setOthers("AP Statistics Youtube, Quizlet")
                setGradient({from: "#d53369", to: "#daae51"})
    
            }
            if(docname === "ushistory"){
                setTextbooks("America: A Narrative History, AMSCO")
                setKhanAcademy("https://www.khanacademy.org/humanities/us-history")
                setPrepBooks("Barron's AP United States History")
                setOthers("Crash Course US History, APUSH Notes and Study Guides")
                setGradient({from: "#fcff9e", to: "#c67700"})
    
            }
            if(docname === "worldhistory"){
                setTextbooks("Ways of the World: A Breif Global History")
                setKhanAcademy("https://www.khanacademy.org/humanities/ap-world-history")
                setPrepBooks("Barron's AP World History, Cracking the AP World History Exam")
                setOthers("Crash Course World History, AP World History Notes and Study Guides")
                setGradient({from: "#fcff9e", to: "#c67700"})
    
            }
            if(docname === "eurohistory"){
                setTextbooks("A History of Western Society")
                setKhanAcademy("https://www.khanacademy.org/humanities/ap-european-history")
                setPrepBooks("Barron's AP European History, Cracking the AP European History Exam")
                setOthers("Crash Course European History, AP European History Notes and Study Guides")
                setGradient({from: "#fcff9e", to: "#c67700"})
    
            }
            if(docname === "usgovt"){
                setTextbooks("American Government: Institutions and Policies")
                setKhanAcademy("https://www.khanacademy.org/humanities/ap-us-government-and-politics")
                setPrepBooks("Barron's AP United States Government and Politics, 5 Steps to a 5: US Government and Politics")
                setOthers("Crash Course US Government and Politics, AP Gov Notes and Study Guides")
                setGradient({from: "#fcff9e", to: "#c67700"})
    
            }
            if(docname === "humangeo"){
                setTextbooks("The Cultural Landscape: An Introduction to Human Geography")
                setKhanAcademy("https://www.khanacademy.org/humanities/ap-human-geography")
                setPrepBooks("Barron's AP Human Geography, 5 Steps to a 5: AP Human Geography")
                setOthers("Crash Course Human Geography, AP Human Geography Notes and Study Guides")
                setGradient({from: "#fcff9e", to: "#c67700"})
    
            }
            if(docname === "musictheory"){
                setTextbooks("Tonal Harmony")
                setKhanAcademy("Couldn't Find a Page on Khan Academy")
                setPrepBooks("Barron's AP Music Theory, 5 Steps to a 5: AP Music Theory")
                setOthers("Teoria Music Theory, MusicTheory.net, Aimee Nolte Music, Adam Neely")
                setGradient({from: "#3F2B96", to: "#9bb1eb"})
            }
            if(docname === "arthistory"){
                setTextbooks("Gardner's Art through the Ages: A Global History")
                setKhanAcademy("https://www.khanacademy.org/humanities/art-history-basics")
                setPrepBooks("Barron's AP Art History, 5 Steps to a 5: AP Art History")
                setOthers("SmartHistory, Google Arts & Culture, Metropolitan Museum of Art")
                setGradient({from: "#3F2B96", to: "#9bb1eb"})
            }
            if(docname === "seminar"){
                setTextbooks("AP Seminar CED, AP Seminar Performance Tasks, AP Seminar Research Library")
                setKhanAcademy("Could not find a page on Khan Academy")
                setPrepBooks("Could not find prep books")
                setOthers("Online Research and Source Evaluation, PUblic Speaking and Presentation Skills")
                setGradient({from: "#4b6cb7", to: "#182848"})
    
            }
            if(docname === "psychology"){
                setTextbooks("Psychology (Myers, DeWall), Barron's AP Psychology")
                setKhanAcademy("https://www.khanacademy.org/social-science/ap-psychology")
                setPrepBooks("Barron's AP Psychology, 5 Steps to a 5: AP Psychology")
                setOthers("Crash Course Psychology, AP Psychology Notes and Study Guides")
                setGradient({from: "#4b6cb7", to: "#182848"})
    
            }
            if(docname === "literature"){
                setTextbooks("Norton Anthology of English Literature")
                setKhanAcademy("Could not find a page on Khan Academy")
                setPrepBooks("Barron's AP English Literature, 5 Steps to a 5: AP English Literature")
                setOthers("AP Lit Essay Writing Tips, Online Literary Analysis Resources, Spark Notes, Shmoop Literature Guides")
                setGradient({from: "#4b6cb7", to: "#182848"})
            }
            if(docname === "lang"){
                setTextbooks("The Language of Composition: Reading, Writing, Rhetoric")
                setKhanAcademy("https://www.khanacademy.org/humanities/ap-english-language")
                setPrepBooks("Barron's AP English Language and Composition, 5 Steps to a 5: AP English Language")
                setOthers("Purdue OWL, Crash Course English Literature & Composition")
                setGradient({from: "#4b6cb7", to: "#182848"})
            }
            if(docname === "microeconomics"){
                setTextbooks("Principles of Microeconomics, Krugman's Economics for the AP")
                setKhanAcademy("https://www.khanacademy.org/economics-finance-domain/ap-microeconomics")
                setPrepBooks("Barron's AP Microeconomics, 5 Steps to a 5: AP Microeconomics")
                setOthers("StudyEcon.com, ACDC Econ")
                setGradient({from: "#00C9FF", to: "#92FE9D"})
            }
            if(docname === "macroeconomics"){
                setTextbooks("Principles of Macroeconomics, Krugman's Economics for the AP")
                setKhanAcademy("https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics")
                setPrepBooks("Barron's AP Macroeconomics, 5 Steps to a 5: AP Macroeconomics")
                setOthers("StudyEcon.com, ACDC Econ")
                setGradient({from: "#00C9FF", to: "#92FE9D"})
            }
        }
        
        
    }, [])
    const handleNewPost = (post) => {
        setPosts([post, ...post]);
    };
    const togglePosts = () => {
        document.getElementById('posts').style = "display:block;"
        document.getElementById('resources').style = "display:none"
        document.getElementById('postslink').style = "text-decoration: underline"
        document.getElementById('resourcelink').style = "text-decoration: none;"
    }
    const toggleResources = () => {
        document.getElementById('resources').style = "display:block"
        document.getElementById('posts').style = "display:none"
        document.getElementById('postslink').style = "text-decoration: none;"
        document.getElementById('resourcelink').style = "text-decoration: underline"
    }
    const gradbgStyle = {
        background: `linear-gradient(to right, ${gradient.from} , ${gradient.to})`,
    }
    return (
        <div className='text-center w-[20rem] sm:w-[50rem] mt-5 mx-auto'>
            <div style={gradbgStyle}  className="h-[4rem] sm:h-[10rem] rounded-t-md">
            </div>
            <div className='h-[5rem] p-2 shadow-[0_1px_4px_rgba(0,0,0,0.30)] rounded-b-md'>
                <p className='inline-block float-left text-[1.5rem] sm:text-[2.5rem]'>{votes.name}</p>
                <p className='inline-block float-right'>{posts.length} posts</p>
            </div>
            <div className='text-left p-5'>
                <a id="postslink" onClick={togglePosts} href="#" className='inline-block text-[1.2rem] underline-offset-8 text-[#3b82f6]'>Posts</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a id="resourcelink" onClick={toggleResources} href="#" className='inline-block text-[1.2rem] hunderline-offset-8 text-[#3b82f6]'>Resources</a>
            </div>
            <hr></hr>
            <div id="posts" className='w-[20rem] sm:w-[50rem] mx-auto gap-x-1.5'>
                {/* <h1 className='text-[2rem]'>Comments</h1> */}
                <div className='sm:inline-block sm:w-[25rem]'>
                    <ul className='mx-auto mt-5'>
                        {posts.map((post) => (
                            <li key={post.id} className='mx-auto rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] w-[20rem] p-2 text-left mt-2'>            
                                <div className='relative w-[7rem]'>
                                    <div className='inline-block mt-1 mr-2'>
                                        <Image className="w-[2rem] h-[2rem]" src={user}></Image>
                                    </div>
                                    <div className='inline-block'>
                                        <p className='text-[1rem] text-slate-600'>{post.author}</p>
                                        <p className='text-[0.7rem] text-slate-600'>{post.date}</p>
                                    </div>    
                                </div>
                                <div className='mt-2'>
                                    <p className='text-[1rem]'>{post.content}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='sm:inline-block sm:w-[25rem]'>
                    <Commentform onNewComment={handleNewPost} docname={docname} />
                </div>
                
            </div>
            <div id="resources" className='hidden relative  mt-5 mx-auto'>
                <p className='mx-auto w-[17rem] sm:w-[50rem] sm:text-[1.5rem]'>
                    Textbooks: {textbooks}
                    <br></br>
                    <br></br>
                    Khan Academy: {khan}
                    <br></br>
                    <br></br>
                    Prep Books: {prep}
                    <br></br>
                    <br></br>
                    Other Resources: {others}
                </p>
                <br></br>
                <br></br>
                <br></br>
                <p>Contact us if you have a resource you would like to add: <a className="text-[#3b82f6] hover:underline" href="mailto:ratemyaps@gmail.com">ratemyaps@gmail.com</a></p>           
            </div>
            <br></br>
            <Footer />
        </div>
    )
}

export default Resource