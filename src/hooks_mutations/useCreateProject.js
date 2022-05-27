import { useMutation } from '@apollo/client';
import getCurrentUser from '../api/query/getCurrentUser';
import createProject from '../api/mutations/createProject';

const useCreateProject = () => {
	const [mutation, { data, loading, error }] = useMutation(createProject, {
		refetchQueries: [{ query: getCurrentUser }]
	});

	const create = async (name, description) => {
		await mutation({ variables: { name, description } });
	};

	return {
		create,
		data,
		loading,
		error
	};
};

export default useCreateProject;
