import { MenuPage, SectionTitle } from '@/components/MenuPage'

interface DolceProps {
  name: string
  price: string
  note?: string
}

function Dolce({ name, price, note }: DolceProps) {
  return (
    <div className='flex justify-between items-start' style={{ marginBottom: '14px', fontSize: '15px' }}>
      <div style={{ maxWidth: '80%' }}>
        <span>{name}</span>
        {note && <div style={{ fontSize: '12px', color: '#555', marginTop: '2px' }}>{note}</div>}
      </div>
      <span>{price}</span>
    </div>
  )
}

interface CocktailProps {
  name: string
  price: string
}

function Cocktail({ name, price }: CocktailProps) {
  return (
    <div className='flex justify-between items-baseline' style={{ marginBottom: '10px', fontSize: '15px' }}>
      <span style={{ maxWidth: '80%' }}>{name}</span>
      <span>{price}</span>
    </div>
  )
}

export default function DolciCocktailPage() {
  return (
    <MenuPage>
      <SectionTitle size='sm'>Dolci fatti in casa</SectionTitle>
      <div style={{ marginBottom: '32px' }}>
        <Dolce name='Crema al mascarpone e biscottini di frolla alle mandorle' price='6' />
        <Dolce
          name='I 3 cioccolati di Martina: crema bavarese al cioccolato bianco, latte e fondente su terra di cioccolato'
          price='7'
        />
        <Dolce
          name='Namelaka alla yogurt greco e cioccolato bianco con composta di frutta'
          price='6,5'
        />
        <Dolce name='Tiramisù in vasetto' price='6' />
        <Dolce name='Gelato fior di latte con caramello salato' price='4,5' />
        <Dolce
          name='Sorbetto al limone'
          price='3,5'
          note='con aggiunta di limoncello o liquiriza  4,5'
        />
      </div>

      <SectionTitle size='sm'>Cocktail</SectionTitle>
      <div>
        <Cocktail name='Gin Florita (distillato a San Pietro di Feletto) con Schweppes tonica' price='7,5' />
        <Cocktail name='Kapriol Old Tom Gin con Fever Tree tonica' price='8,5' />
        <Cocktail name="Hendrick's Gin servito con Fever Tree tonica" price='9,5' />
        <Cocktail name='Vodka NBAH (distillata a San Pietro di Feletto) e Schweppes tonica' price='7,5' />
        <Cocktail name='Vodka Belvedere con Fever Tree tonica' price='9' />
        <Cocktail name='Beluga Vodka con Fever Tree tonica' price='9,5' />
        <Cocktail name='Rum Legendario Elixir e cola' price='8' />
      </div>
    </MenuPage>
  )
}
