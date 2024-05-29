import { getStatusClass } from '@/lib/utils';
import { Badge } from './ui/badge';

export const LaunchCountdownCard = ({ time, badge }: { time: string; badge: string }) => {
  return (
    <article className="rounded-2xl bg-[black] flex-1 p-[1.125rem] flex flex-col justify-between min-h-[10rem]">
      <header className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium leading-none text-secondary">Launch Countdown</h3>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">{time}</h4>
        </div>
        <Badge className="rounded-full">{badge}</Badge>
      </header>
      <section className="w-full bg-card relative h-4 rounded-sm">
        <div className="w-8/12 h-4 rounded-sm bg-secondary"></div>
      </section>
    </article>
  );
};

export const LaunchRecordCard = ({
  provider,
  providerCount,
  totalCount,
  statusId
}: {
  provider: string;
  providerCount: number;
  totalCount: number;
  statusId: number;
}) => {
  const countNotProvider = totalCount - providerCount;
  const countPrivderNotCurrent = providerCount - 1;

  const notProvider = Array.from({ length: countNotProvider }, (_, index) => index);
  const providerNotCurrent = Array.from({ length: countPrivderNotCurrent }, (_, index) => index);

  return (
    <article className="rounded-2xl bg-[black] flex-1 p-[1.125rem] flex flex-col justify-between gap-8">
      <header>
        <h3 className="text-sm font-medium leading-none text-secondary">2024 Launch Record</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">{provider}</h4>
      </header>
      <section className="w-full max-w-full flex flex-wrap gap-1">
        {notProvider.map((_, i) => (
          <span
            key={i}
            className="inline w-2 h-2 rounded-full bg-muted"
          ></span>
        ))}
        {providerNotCurrent.map((_, i) => (
          <span
            key={i}
            className="inline w-2 h-2 rounded-full bg-secondary"
          ></span>
        ))}
        <span className={`inline w-2 h-2 rounded-full ${getStatusClass(statusId)}`}></span>
      </section>
    </article>
  );
};
