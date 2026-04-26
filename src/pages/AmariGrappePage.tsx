import { MenuPage, SectionTitle } from '@/components/MenuPage'

interface ItemRowProps {
  name: string
  price: string
  sub?: string
}

function ItemRow({ name, price, sub }: ItemRowProps) {
  return (
    <div style={{ marginBottom: sub ? '10px' : '6px', fontSize: '15px' }}>
      <div className='flex justify-between items-baseline'>
        <span style={{ maxWidth: '80%' }}>{name}</span>
        <span>{price}</span>
      </div>
      {sub && <div style={{ fontSize: '12px', color: '#555', marginTop: '2px' }}>{sub}</div>}
    </div>
  )
}

export default function AmariGrappePage() {
  return (
    <MenuPage>
      <SectionTitle size='sm'>Amari e distillati</SectionTitle>
      <div style={{ marginBottom: '32px' }}>
        <ItemRow name='Limoncello' price='3,5' />
        <ItemRow name='Liquirizia' price='3,5' />
        <ItemRow
          name='Amari: Kapriol, Amaro del Cansiglio, Amaro del Frate, Branca Menta, Fernet Branca, Montenegro, Braulio, Jagermeister, Amaro del Capo, Disaronno, Baileys, Averna, Petrus'
          price='3,8'
        />
        <ItemRow name='Jefferson - Amaro Importante' price='5' />
        <ItemRow name='Braulio Riserva Speciale' price='5' />
        <ItemRow name='Whisky Single Malt - Glenfiddich 12 anni' price='7' />
        <ItemRow name='Whisky Single Malt - Laphroaig Select' price='7,5' />
        <ItemRow name='Rum Legendario Elixir de Cuba' price='6,5' />
        <ItemRow
          name='Rum Zacapa Solera 23 anni'
          price='9'
          sub='servito con scaglie di cioccolato fondente'
        />
      </div>

      <SectionTitle size='sm'>Grappe</SectionTitle>
      <div>
        <ItemRow
          name='Grappa bianca San Michele'
          price='3,5'
          sub='prodotto locale distillato a San Pietro di Feletto'
        />
        <ItemRow name='Grappa 903 bianca' price='4,5' />
        <ItemRow name='Grappa 903 barricata' price='4,5' />
        <ItemRow name='Barricata Da Ponte invecchiata 8 anni' price='4,5' />
        <ItemRow name='Storica nera' price='5,5' />
      </div>
    </MenuPage>
  )
}
