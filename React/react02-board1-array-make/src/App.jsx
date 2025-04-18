import NavList from './components/navigation/NavList'
import NavView from './components/navigation/NavView'
import NavWrite from './components/navigation/NavWrite'
import ArticleList from './components/article/ArticleList'
import ArticleView from './components/article/ArticleView'
import ArticleWrite from './components/article/ArticleWrite'

function Header(props){
  return (
    <header>
      <h2>게시판-목록</h2>
    </header>
  )
}

function App() {
  return (<>
    <Header></Header>
    <NavList></NavList>
    <ArticleList></ArticleList>
  </>)
}

export default App
