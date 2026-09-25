export default function Footer({ snapped, snapDelay }) {
  return (
    <footer
      className={`text-center px-5 pt-9 pb-12 text-white/55
        ${snapped ? 'opacity-0 scale-[0.3] blur-lg [transition:transform_1s_ease,opacity_1s_ease,filter_1s_ease]' : ''}`}
      style={snapped ? { transitionDelay: snapDelay } : undefined}
    >
      <p>&copy; 2026 Vivek Patel</p>
    </footer>
  )
}
