export default function Footer() {
    return (
      <footer className="bg-brown-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Fayleaf. All rights reserved.</p>
        </div>
      </footer>
    );
  }