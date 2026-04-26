import { MenuPage, SectionTitle } from '@/components/MenuPage'

interface DrinkRowProps {
  name: string
  price: string
}

function DrinkRow({ name, price }: DrinkRowProps) {
  return (
    <div className='flex justify-between items-baseline' style={{ paddingBlock: '3px', fontSize: '15px' }}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  )
}

interface TapBeerProps {
  name: string
  piccola: string
  media: string
}

function TapBeer({ name, piccola, media }: TapBeerProps) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ fontSize: '15px' }}>{name}</div>
      <div className='flex justify-center' style={{ gap: '48px', marginTop: '2px' }}>
        <span style={{ fontSize: '13px' }}>piccola <strong style={{ fontSize: '15px' }}>{piccola}</strong></span>
        <span style={{ fontSize: '13px' }}>media <strong style={{ fontSize: '15px' }}>{media}</strong></span>
      </div>
    </div>
  )
}

export default function AperitivoPage() {
  return (
    <MenuPage>
      <SectionTitle size='sm'>Aperitivo</SectionTitle>
      <div style={{ marginBottom: '28px' }}>
        <DrinkRow name='Prosecco DOCG extra dry' price='3,5' />
        <DrinkRow name='ProseccoDOCG brut' price='3,5' />
        <DrinkRow name='Americano' price='6' />
        <DrinkRow name='Gin Tonic' price='7,5/10' />
        <DrinkRow name='Vodka Tonic' price='7,5/10' />
        <DrinkRow name='Rum e cola' price='8,5' />
        <DrinkRow name='Spritz Aperol' price='4' />
        <DrinkRow name='Spritz Campari' price='4' />
        <DrinkRow name='Spritz bianco' price='3,5' />
        <DrinkRow name='Gingerino biologico' price='3,5' />
        <DrinkRow name='Analcolico San Michele' price='3,5' />
      </div>

      <SectionTitle size='sm'>Bibite</SectionTitle>
      <div style={{ marginBottom: '28px' }}>
        <DrinkRow name='Acqua naturale/frizzante 0,75L' price='3,5' />
        <DrinkRow name='Coca Cola 0,3L' price='3,5' />
        <DrinkRow name='Coca Cola 0,5L' price='5' />
        <DrinkRow name='Coca Cola Zero' price='3,5' />
        <DrinkRow name='Fanta' price='3,5' />
        <DrinkRow name='Fever Tree Tonica' price='3,5' />
        <DrinkRow name='The San Benedetto in vetro' price='3,5' />
      </div>

      <SectionTitle size='sm'>Birre alla spina</SectionTitle>
      <div>
        <TapBeer name='Bionda Paulaner Munchner Hell' piccola='3,5' media='5,5' />
        <TapBeer name='Non Filtrata Schwechater Zwickl' piccola='3,5' media='6' />
        <TapBeer name='Rossa Paulaner Salvator' piccola='3,5' media='6' />
      </div>
    </MenuPage>
  )
}
