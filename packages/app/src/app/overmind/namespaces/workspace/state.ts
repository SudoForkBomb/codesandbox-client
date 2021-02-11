import { Dependency } from '@codesandbox/common/lib/types/algolia';

export enum OptionTypes {
  CaseSensitive = 'caseSensitive',
  Regex = 'regex',
  MatchFullWord = 'matchFullWord',
}

type State = {
  project: {
    title: string;
    description: string;
    alias: string;
  };
  tags: {
    tagName: string;
  };
  openedWorkspaceItem: string | null;
  workspaceHidden: boolean;
  showDeleteSandboxModal: boolean;
  dependencies: Dependency[];
  explorerDependencies: Dependency[];
  explorerDependenciesEmpty: boolean;
  selectedDependencies:
    | {
        [a: string]: Dependency;
      }
    | {};
  loadingDependencySearch: boolean;
  hitToVersionMap: {
    [name: string]: string;
  };
  showingSelectedDependencies: boolean;
  dependencySearch: string;
  searchValue: string;
  searchResults: any[];
  searchOptions: {
    [OptionTypes.CaseSensitive]: boolean;
    [OptionTypes.Regex]: boolean;
    [OptionTypes.MatchFullWord]: boolean;
    showFileFilters: boolean;
    openFilesSearch: boolean;
    filesToInclude: string;
    filesToExclude: string;
  };
};

export const state: State = {
  project: {
    title: '',
    description: '',
    alias: '',
  },
  tags: {
    tagName: '',
  },
  openedWorkspaceItem: null,
  workspaceHidden: false,
  showDeleteSandboxModal: false,
  dependencies: [],
  explorerDependencies: [],
  explorerDependenciesEmpty: false,
  selectedDependencies: {},
  loadingDependencySearch: false,
  hitToVersionMap: {},
  showingSelectedDependencies: false,
  dependencySearch: '',
  searchValue: '',
  searchResults: [],
  searchOptions: {
    [OptionTypes.CaseSensitive]: false,
    [OptionTypes.Regex]: false,
    [OptionTypes.MatchFullWord]: false,
    showFileFilters: false,
    openFilesSearch: false,
    filesToInclude: '',
    filesToExclude: '',
  },
};
