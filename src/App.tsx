/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

const CALENDARS = [
  { id: 'gregory', name: 'الميلادي (Gregorian)' },
  { id: 'islamic-umalqura', name: 'الهجري (Hijri)' },
  { id: 'persian', name: 'الفارسي (Persian)' },
  { id: 'hebrew', name: 'العبري (Hebrew)' },
  { id: 'buddhist', name: 'البوذي (Buddhist)' },
  { id: 'indian', name: 'الهندي (Indian)' },
  { id: 'coptic', name: 'القبطي (Coptic)' },
  { id: 'ethiopic', name: 'الإثيوبي (Ethiopian)' },
];

export default function App() {
  const [today] = useState(new Date());

  const formatDate = (calId: string) => {
    try {
      return new Intl.DateTimeFormat('ar-u-ca-' + calId, {
        dateStyle: 'full',
      }).format(today);
    } catch (e) {
      return 'تقويم غير مدعوم';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8" dir="rtl">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">مستكشف التقويم العالمي</h1>
        <p className="text-zinc-600 mt-2">تاريخ اليوم في مختلف أنظمة التقويم.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CALENDARS.map((cal) => (
          <div key={cal.id} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{cal.name}</h2>
            <p className="text-2xl font-semibold mt-2 text-zinc-900">
              {formatDate(cal.id)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
