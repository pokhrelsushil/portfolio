import React from "react";

const currentlyReading = [
  { title: "How to Solve It", author: "George Pólya" },
  { title: "Human Compatible", author: "Stuart Russell" },
  {
    title: "Think, Play, Do: Technology, Innovation, and Organization",
    author: "Mark Dodgson",
  },
];

const read = [
  {
    title: "Agent-Based and Individual-Based Modeling: A Practical Introduction",
    author: "Steven F. Railsback, Volker Grimm",
  },
  { title: "Atlas of AI", author: "Kate Crawford" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
  { title: "Discipline and Punish", author: "Michel Foucault" },
  { title: "Evolutionary Intelligence", author: "Rolf Pfeifer, Josh Bongard" },
  { title: "Getting to Yes", author: "Roger Fisher, William Ury" },
];

const BookItem = ({ book }) => {
  return (
    <div className="space-y-1">
      <p className="font-medium text-gray-900">{book.title}</p>
      <p className="text-sm text-gray-600">{book.author}</p>
    </div>
  );
};

const ColumnCard = ({ title, children }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-5">
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
};

const Resources = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-6">

          <div className="max-w-2xl space-y-3">
            <h1 className="text-4xl font-bold text-gray-900">
              My Reading List
            </h1>
            <p className="text-gray-600 leading-relaxed">
              A personal and evolving collection of books I am currently studying
              and those I have already completed.
            </p>
          </div>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <ColumnCard title="Currently Reading">
            {currentlyReading.map((book, idx) => (
              <React.Fragment key={book.title}>
                <BookItem book={book} />
                {idx !== currentlyReading.length - 1 && (
                  <div className="h-px bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </ColumnCard>

          {/* Right column */}
          <ColumnCard title="Already Read">
            {read.map((book, idx) => (
              <React.Fragment key={book.title}>
                <BookItem book={book} />
                {idx !== read.length - 1 && (
                  <div className="h-px bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </ColumnCard>
        </div>

        {/* Footer */}
        <footer className="pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} — Personal academic reading archive
        </footer>
      </div>
    </main>
  );
};

export default Resources;
