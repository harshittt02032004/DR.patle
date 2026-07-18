// Re-mounts on every route change, giving each page a soft fade-rise entrance
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="main-content" className="page-enter">
      {children}
    </div>
  );
}
