import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
  CurrencyDollar,
} from 'phosphor-react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useSummary } from '../../hooks/useSummary';
import { priceFormatter } from '../../utils/formatter';
import * as S from './styles';

export function Summary() {
  const summary = useSummary();

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  );
}
