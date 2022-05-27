import { useMutation } from '@apollo/client';
import getCurrentUser from '../api/query/getCurrentUser';
import removeProject from '../api/mutations/removeProject';

const useRemoveProject = () => {
	const [mutation, { data }] = useMutation(removeProject, {
		refetchQueries: [{ query: getCurrentUser }]
	});

	const remove = async (id) => {
		await mutation({ variables: { id } });
	};

	return {
		remove,
		data
	};
};

export default useRemoveProject;
