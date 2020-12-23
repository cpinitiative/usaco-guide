import React, { Component } from 'react';

const feedBackForm = () => (
  <form action="#" method="POST">
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="px-100 py-100 bg-white space-y-12 sm:p-6">
        <div className="mt-4">
          <span className="text-gray-700">Problem Difficulty</span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="personal"
                onClick={event => handleDifficultyChange('Easy')}
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="Medium"
                onClick={event => handleDifficultyChange('Medium')}
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="Hard"
                onClick={event => handleDifficultyChange('Hard')}
              />
              <span className="ml-2">Hard</span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-gray-700">Make feedback Public or Private</span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="setStatus"
                value="setStatus"
                onClick={event => setPrivate(true)}
              />
              <span className="ml-2">Public</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="setStatus"
                value="setStatus"
                onClick={event => setPrivate(false)}
              />
              <span className="ml-2">Private</span>
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            Solution Code
          </label>
          <div className="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="What do you think about this problem?"
              onChange={event => setsolutionCode(event.target.value)}
            >
              {' '}
            </textarea>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          This is a survey to collect user input on the provided problem
        </p>
      </div>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={e => handleSumbit(e, problem)}
        >
          Submit
        </button>
      </div>
    </div>
  </form>
);

export default feedBackForm;
