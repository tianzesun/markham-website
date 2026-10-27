import { ImageResponse } from 'next/og'

export const alt = 'HeyMarkham - Voice Assistant for Markham Residents'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '20px',
              background: '#486581',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Microphone mark */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </div>
          <div style={{ fontSize: '56px', fontWeight: 700 }}>HeyMarkham</div>
        </div>
        <div style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.1, marginBottom: '28px' }}>
          Just say &ldquo;Hey Markham&rdquo;
        </div>
        <div style={{ fontSize: '32px', color: '#bcccdc' }}>
          Instant answers about Markham city services, 24/7.
        </div>
      </div>
    ),
    size,
  )
}
