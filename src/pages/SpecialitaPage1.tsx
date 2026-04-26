import { MenuPage, SectionTitle, MenuItem, PageFooter } from '@/components/MenuPage'

export default function SpecialitaPage1() {
  return (
    <MenuPage>
      <SectionTitle>Le specialita'</SectionTitle>
      <MenuItem
        name='Marinara'
        price='6,5'
        description='pomodoro pelato italiano, origano calabrese, aglio tritato fine, olio extravergine di oliva 100% italiano, basilico fresco'
      />
      <MenuItem
        name='Bufala'
        price='10,5'
        description='pomodoro pelato italiano, mozzarella di bufala campana DOP, parmigiano reggiano, olio extravergine 100% italiano, basilico fresco'
      />
      <MenuItem
        name='Veneta'
        price='12,5'
        description='base bianca senza pomodoro, mozzarella da latte 100% italiano, provola affumicata, gocce di olio aromatizzato al tartufo, porchetta trevigiana selezione oro a fine cottura'
      />
      <MenuItem
        name='Saporita'
        price='12'
        description='base bianca senza pomodoro, mozzarella da latte 100% italiano, gorgonzola DOP, grana padano DOP grattuggiato, prosciutto cotto alta qualità a fine cottura'
      />
      <MenuItem
        name='Sarda'
        price='11,5'
        description='pomodoro pelato italiano, origano calabrese, mozzarella da latte 100% italiano, salsiccia di maiale senza conservanti aggiunti, pecorino sardo DOP grattuggiato (in cottura)'
      />
      <PageFooter>DISPONIBILI: mozzarella senza lattosio e basi no glutine</PageFooter>
    </MenuPage>
  )
}
