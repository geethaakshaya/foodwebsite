import Footer from './Pages/01-Footer/Footer';
import MainRoutes from './Pages/02-MainRoutes/MainRoutes'
function App() {
  return (
     <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <MainRoutes />
      </main>
      
    </div>
  );
}

export default App;
