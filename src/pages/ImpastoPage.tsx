import { MenuPage, SectionTitle } from '@/components/MenuPage'

export default function ImpastoPage() {
  return (
    <MenuPage>
      <div className='flex-1 flex flex-col justify-center'>
        <SectionTitle>L'impasto</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '16px', lineHeight: '1.6' }}>
          <p>
            La nostra pizza è il frutto d'anni di esperienza, studio e ricerca.
          </p>
          <p>
            Siamo partiti dalla selezione delle migliori farine locali privilegiando
            quelle poco raffinate e ricche di fibre.
          </p>
          <p>
            Tra tutte ne abbiamo selezionate tre che, miscelate assieme, danno origine
            a un mix unico e particolare.
          </p>
          <p>
            L'alta idratazione, l'utilizzo moderato di sodio e le 48 ore di lievitazione ci
            consentono di ottenere una pizza soffice, gustosa, leggera ma soprattutto
            facile da digerire.
          </p>
        </div>
      </div>
    </MenuPage>
  )
}
