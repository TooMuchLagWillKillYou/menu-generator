import { MenuPage, SectionTitle, MenuItem, PageFooter } from '@/components/MenuPage'

export default function ClassichePage1() {
  return (
    <MenuPage>
      <SectionTitle>Le classiche</SectionTitle>
      <MenuItem
        name='Capricciosa'
        price='10,5'
        description='salsa di pomodoro, mozzarella fior di latte, prosciutto cotto alta qualità, carciofi, funghi champignon trifolati'
      />
      <MenuItem
        name='Diavola'
        price='9'
        description='salsa di pomodoro, mozzarella fior di latte, salamino piccante di Sauris'
      />
      <MenuItem
        name='Cotto e funghi'
        price='9,5'
        description='salsa di pomodoro, mozzarella fior di latte, prosciutto cotto alta qualità, funghi champignon trifolati'
      />
      <MenuItem
        name='Viennese'
        price='8,5'
        description="salsa di pomodoro, mozzarella fior di latte, wurstel dell'Alto Adige"
      />
      <MenuItem
        name='4 formaggi'
        price='10,5'
        description='mozzarella fior di latte, gorgonzola, brie, spolverata di Grana Padano DOP'
      />
      <PageFooter>DISPONIBILI: mozzarella senza lattosio e basi no glutine</PageFooter>
    </MenuPage>
  )
}
