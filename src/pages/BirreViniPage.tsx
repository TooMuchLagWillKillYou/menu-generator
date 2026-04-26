import { MenuPage, SectionTitle } from '@/components/MenuPage'

interface BottledBeerProps {
  name: string
  price: string
}

function BottledBeer({ name, price }: BottledBeerProps) {
  return (
    <div className='flex justify-between items-baseline' style={{ paddingBlock: '3px', fontSize: '15px' }}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  )
}

interface WineProps {
  name: string
  producer: string
  calice?: string
  bottiglia: string
}

function Wine({ name, producer, calice, bottiglia }: WineProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ fontSize: '15px' }}>{name}</div>
      <div className='flex justify-between items-baseline' style={{ marginTop: '2px' }}>
        <span style={{ fontSize: '13px', color: '#555' }}>{producer}</span>
        <span style={{ fontSize: '13px' }}>
          {calice && <span>calice <strong style={{ fontSize: '15px' }}>{calice}</strong>{'  '}</span>}
          bottiglia <strong style={{ fontSize: '15px' }}>{bottiglia}</strong>
        </span>
      </div>
    </div>
  )
}

export default function BirreViniPage() {
  return (
    <MenuPage>
      <SectionTitle size='sm'>Birre in bottiglia</SectionTitle>
      <div style={{ marginBottom: '32px' }}>
        <BottledBeer name='Bianca Blanche de Namur 0,33L' price='5' />
        <BottledBeer name='Herb Radler Cimbra 0,5L' price='6,5' />
        <BottledBeer name='Weizen Andechs 0,5L' price='6,5' />
        <BottledBeer name='IPA 0,33L' price='5' />
        <BottledBeer name='Senza glutine Daura Damm 0,33L' price='5' />
        <BottledBeer name='Analcolica Clausthaler 0,33L' price='4,5' />
      </div>

      <SectionTitle size='sm'>Vini</SectionTitle>
      <div>
        <Wine
          name='Prosecco DOCG superiore brut'
          producer='Riva dei Frati'
          calice='3,5'
          bottiglia='20'
        />
        <Wine
          name='Prosecco DOCG Superiore extra dry'
          producer='Riva dei Frati'
          calice='3,5'
          bottiglia='20'
        />
        <Wine
          name='Prosecco DOCG superiore cartizze'
          producer='Riva dei Frati'
          bottiglia='27'
        />
        <Wine
          name='Lugana San Benedetto'
          producer='Zenato'
          bottiglia='23'
        />
        <Wine
          name='Incrocio Manzoni - Azienda Agricola Emilio Sartor'
          producer=''
          calice='3,5'
          bottiglia='18'
        />
        <Wine
          name='Merlot - Azienda Agricola Emilio Sartor'
          producer=''
          calice='3,5'
          bottiglia='17'
        />
        <Wine
          name='Franciacorta Brut'
          producer='Contadi Castaldi'
          bottiglia='32'
        />
        <Wine
          name='Montello Rosso Superiore DOCG "Campo del Pra"'
          producer='Azienda Agricola Emilio Sartor'
          bottiglia='26'
        />
      </div>
    </MenuPage>
  )
}
