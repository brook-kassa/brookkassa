export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span
        className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
        style={{
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.2)',
          color: '#D4AF37',
        }}
      >
        {children}
      </span>
    </div>
  );
}
