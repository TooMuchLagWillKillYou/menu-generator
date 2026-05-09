import {
  MenuPage,
  MenuItem,
  PageFooter,
  MenuItemsContainer,
} from '@/components/MenuPage';

export default function SpecialitaPage2() {
  return (
    <MenuPage>
      <MenuItemsContainer>
        <MenuItem
          name="Siciliana"
          price="13"
          description="pomodoro pelato italiano, mozzarella di bufala campana DOP, olive della Riviera del Garda denocciolate, capperi siciliani, filetti di acciughe, origano, basilico fresco"
        />
        <MenuItem
          name="Bologna"
          price="13"
          description="base bianca senza pomodoro, mozzarella da latte 100% italiano, mortadella IGP antica bologna, stracciatella di burrata, granella di pistacchio"
        />
        <MenuItem
          name="Gricia"
          price="11,5"
          description="base bianca senza pomodoro, mozzarella da latte 100% italiano, pecorino Romano DOP grattugiato, guanciale di Sauris, pepe nero macinato a fine cottura"
        />
        <MenuItem
          name="Salsiccia e friarielli"
          price="12"
          description="base bianca senza pomodoro, mozzarella da latte 100% italiano, friarielli*, salsiccia senza conservanti aggiunti, provola affumicata, grana padano DOP"
        />
        <MenuItem
          name="Parma Dop"
          price="13"
          description="pomodoro pelato italiano, mozzarella con latte di bufala spezzata a mano, crudo di Parma riserva DOP stagionato 24 mesi, basilico fresco"
        />
        <MenuItem
          name="Tirolese"
          price="13"
          description="crema di ricotta alla base, mozzarella da latte 100% italiano, formaggio brie, speck di Sauris IGP"
        />
      </MenuItemsContainer>
      <PageFooter>* il prodotto potrebbe essere congelato</PageFooter>
    </MenuPage>
  );
}
