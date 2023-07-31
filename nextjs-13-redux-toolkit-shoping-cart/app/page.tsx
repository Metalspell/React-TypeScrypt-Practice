import Header from './shared/Header'
import MainComponent from './shared/MainComponent'

export default function Home() {
  return (
    <div className="flex flex-wrap w-full gap-4 p-4">
      <Header />
      <MainComponent />
    </div>
  )
}
