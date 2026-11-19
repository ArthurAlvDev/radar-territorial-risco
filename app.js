export const ZONES = [
  { id: 'encosta-norte', name: 'Encosta Norte', risk: 'ALTO', shelter: 'E.M. São Pedro (400m)' },
  { id: 'varzea-sul', name: 'Várzea Sul', risk: 'MÉDIO', shelter: 'Ginásio Municipal (650m)' },
  { id: 'planalto', name: 'Planalto Central', risk: 'BAIXO', shelter: 'Ponto de Apoio Centro (300m)' }
];

export function filterZonesByRisk(risk = '') {
  if (!risk) return ZONES;
  return ZONES.filter((z) => z.risk === risk);
}
