import { useItems } from './hooks/items';
import { Item } from './components/Item';
import { useSEO } from './hooks/useSEO';
import './App.css'

// const INITIAL_ITEMS = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: new Date(),
//     text: "Videojuegos"
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Libros"
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: new Date(),
//     text: "Mora"
//   }
// ]
function App() {
  const { items, haldelSubmit, hlandleDelete } = useItems()
  useSEO({ title: `Prueba tecnica de React${items.length}`, description: 'Lista de elementos' })

  return (
    <>
      <main>
        <aside>
          <h1>Prueba tecnica de React</h1>
          <h2>Añadir y eliminar de una una lista</h2>
          <form onSubmit={haldelSubmit} aria-label='añardir elemento a la lista'>
            <label htmlFor="">
              <input
                type="text"
                name='item'
                required
                placeholder='Adicione uma nueva tarea'
              />
            </label>
            <button >Añadir elemento a la lista</button>
          </form>
        </aside>
        <section>
          <h2>lista de elementos</h2>
          <ul>
            {
              items.length === 0 ? <p>No hay elementos</p> :
                items.map(item => {

                  return (
                    <Item key={item.id} {...item} hlandleDelete={hlandleDelete} />
                  )

                })
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
