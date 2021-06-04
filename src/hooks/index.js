import { useContext } from 'react';
import ConfProject from '../Contexts/ConfProject';

function useConfProject() {

  const Conf = useContext(ConfProject)

  return Conf;
}

export default useConfProject;