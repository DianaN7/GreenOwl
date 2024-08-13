import { Footer } from '@/components/landing/Footer'
import { Header } from '@/components/landing/Header'

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="container flex flex-grow flex-col px-0">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default MarketingLayout
