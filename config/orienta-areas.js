const defaultArea = 'demografici';

const workspaces = [
  { id: defaultArea, label: 'Servizi Demografici', icon: 'fa-landmark' },
  { id: 'finanziaria', label: 'Area Economico-Finanziaria', indexModule: 'Area Economico - Finanziaria', icon: 'fa-calculator', helpChoices: ['Atti di liquidazione', 'Accertamenti PagoPA', 'Fatturazione attiva'] },
  { id: 'codice-strada', label: 'Codice della Strada', indexModule: 'Codice della Strada', icon: 'fa-road', helpChoices: ['Inserimento verbali', 'Gestione ricorsi', 'Documenti del verbale'] },
];

const findWorkspace = (id) => workspaces.find((workspace) => workspace.id === id);
const getWorkspace = (id) => findWorkspace(id) || workspaces[0];

function areaHref(path, id, params = {}) {
  const [pathname, fragment] = path.split('#');
  const query = new URLSearchParams(params);
  if (id && id !== defaultArea) query.set('area', id);
  return `${pathname}${query.size ? `?${query}` : ''}${fragment ? `#${fragment}` : ''}`;
}

module.exports = { defaultArea, workspaces, findWorkspace, getWorkspace, areaHref };
