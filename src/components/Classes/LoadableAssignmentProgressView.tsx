import Loadable from '@loadable/component';

const LoadableAssignmentProgressView = Loadable(
  () => import('./AssignmentProgressView')
);

export default LoadableAssignmentProgressView;
