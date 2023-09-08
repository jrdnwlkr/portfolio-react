function PageContent({ children }) {
  return (
    <div className="page-content bg-gray-900 h-screen relative">
      {children}
    </div>
  );
}

export default PageContent;