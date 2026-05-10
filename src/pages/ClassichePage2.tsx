import { MenuPage, MenuItem, MenuItemsContainer } from '@/components/MenuPage';

export default function ClassichePage2() {
  return (
    <MenuPage>
      <MenuItemsContainer style={{ height: '70%' }}>
        <MenuItem
          name="Bresaola, rucola e grana"
          price="12"
          description="pomodoro pelato italiano, mozzarella da latte 100% italiano, rucola, bresaola della Valtellina IGP, ricciola di Grana Padano riserva"
        />
        <MenuItem
          name="Vegetariana"
          price="10,5"
          description="pomodoro pelato italiano, mozzarella da latte 100% italiano, zucchine, peperoni, pomodorino datterino"
        />
        <MenuItem
          name="Romana"
          price="10"
          description="pomodoro pelato italiano, mozzarella da latte 100% italiano, filetti di acciughe interi, origano calabrese"
        />
        <MenuItem
          name="Parmigiana"
          price="11"
          description="pomodoro pelato italiano, mozzarella da latte 100% italiano, melanzane cotte in forno a bassa temperatura, parmigiano reggiano grattuggiato in cottura, basilico fresco"
        />
      </MenuItemsContainer>
    </MenuPage>
  );
}
