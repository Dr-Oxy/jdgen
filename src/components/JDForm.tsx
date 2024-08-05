import Modal from './elements/Modal';
import SelectDropdown from './elements/Select';

import { useForm, Controller } from 'react-hook-form';

import { job_exp, job_type } from '../utils/data';

const JDForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Modal>
      <form>
        <div>
          <label className="text-sm text-black">Job title</label>
          <input
            className="mt-2 w-full bg-transparent text-black py-3 px-5 text-base border border-black rounded-lg focus:outline-0 focus:border-blue-400"
            type="text"
            placeholder="Frontend developer (Reactjs/Nextjs)"
            {...register('jobTitle', {
              required: true,
            })}
          />
          {errors.jobTitle ? (
            <p className="text-red-500 text-xs">Job title is required</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-10">
          <div>
            <label className="text-sm text-black">Experience</label>

            <Controller
              control={control}
              name="jobExp"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <SelectDropdown options={job_exp} {...field} />
              )}
            />

            {errors.jobExp ? (
              <p className="text-red-500 text-xs">Select years of experience</p>
            ) : null}
          </div>

          <div>
            <label className="text-sm text-black">Location</label>
            <Controller
              control={control}
              name="jobType"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <SelectDropdown options={job_type} {...field} />
              )}
            />

            {errors.jobType ? (
              <p className="text-red-500 text-xs">Select work type</p>
            ) : null}
          </div>
        </div>

        <div>
          <button className="bg-[#4D4C4C] text-white rounded-lg w-full py-3 text-base font-medium">
            Generate JD
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default JDForm;
