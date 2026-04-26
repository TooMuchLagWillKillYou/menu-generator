import { MenuPage, SectionTitle } from '@/components/MenuPage'

interface CoffeeRowProps {
  name: string
  price: string
}

function CoffeeRow({ name, price }: CoffeeRowProps) {
  return (
    <div className='flex justify-between items-baseline' style={{ paddingBlock: '4px', fontSize: '16px' }}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  )
}

export default function CaffetteriaPage() {
  return (
    <MenuPage>
      <div className='flex-1 flex flex-col justify-center'>
        <SectionTitle>Caffetteria</SectionTitle>
        <div>
          <CoffeeRow name='Caffè espresso' price='1,7' />
          <CoffeeRow name='Caffè macchiato' price='1,7' />
          <CoffeeRow name='Caffè decaffeinato' price='1,8' />
          <CoffeeRow name='Caffè orzo' price='1,8' />
          <CoffeeRow name='Caffè corretto' price='2' />
          <CoffeeRow name='Caffè doppio' price='2,5' />
        </div>
      </div>
    </MenuPage>
  )
}
