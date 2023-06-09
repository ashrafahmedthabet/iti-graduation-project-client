import { useMutation, useQuery } from "@tanstack/react-query";

import {
  ENDPOINT_MY_ORDERS,
  ENDPOINT_ONE_ORDER,
  ENDPOINT_ORDERS,
  ENDPOINT_ORDERS_SELLER,
} from "../utils/constants/endpoints.constants";
import {
  KEY_REPO_GET_OREDER,
  KEY_REPO_ORDERS,
  KEY_REPO_GET_ALL_MY_ORDERS,
  KEY_REPO_GET_MY_ORDERS,
  KEY_REPO_GET_ALL_ORDERS,
} from "../utils/constants/queries_keys.constants";
import AxiosApiHelper from "../helper/axios_api.helper";
import { useDispatch } from "react-redux";
import { showErrorAlert, showSuccessAlert } from "../redux/global/global.reducer";
import { useNavigate } from "react-router-dom";
import PageRoutes from "../router/page_routes";
import useAuth from "../custom_hooks/use_auth";
import { addItemToCart } from "../redux/order/order.reducer";


export const RepoGetAllOrders = () => {
  const dispatch = useDispatch();

  return useQuery([KEY_REPO_GET_ALL_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS), {
    onError: (error) => {
      dispatch(showErrorAlert(error));
    },
  }
  );
};

export const RepoGetOrders = () => {
  return useQuery([KEY_REPO_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS_SELLER + "/myorders")
  );
};

export const RepoGetMyOrders = () => {
  const { isAuth } = useAuth()
  return useQuery(
    [KEY_REPO_GET_MY_ORDERS],
    () => {
      if (isAuth) {
        return AxiosApiHelper.get(ENDPOINT_MY_ORDERS)
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

// export const RepoGetAllMyOrders = () => {
//   return useQuery([KEY_REPO_GET_ALL_MY_ORDERS], () =>
//     AxiosApiHelper.get(ENDPOINT_ORDERS_SELLER)
//   );
// };

export const RepoGetAllMyOrders = () => {
  const dispatch = useDispatch();

  return useQuery([KEY_REPO_GET_ALL_MY_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS_SELLER), {
    onError: (error) => {
      dispatch(showErrorAlert(error));
    },
  }
  );
};

export const RepGetOneOrder = (orderId) => {
  return useQuery([[KEY_REPO_GET_OREDER], orderId], () =>
    AxiosApiHelper.get(ENDPOINT_ONE_ORDER + "/" + orderId)
  );
};

export const RepoCreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation((data) => AxiosApiHelper.post(ENDPOINT_ORDERS, data), {
    onSuccess: (date, data) => {
      dispatch(addItemToCart(data));
      dispatch(showSuccessAlert("Order created successfully"));
    },
    onError: (error) => {
      dispatch(showErrorAlert(error));
    },
  });
};

// export const RepoUpdateOrder = () => {
//   const dispatch = useDispatch();
//   return useMutation((order) =>
//     AxiosApiHelper.patch(ENDPOINT_ORDERS + "/" + order["_id"], order), {
//     onSuccess: () => {
//       dispatch(showSuccessAlert("Order updated successfully"));
//     }
//   }
//   );
// };

export const RepoUpdateOrder = () => {
  const dispatch = useDispatch();

  return useMutation(
    data => {
      return AxiosApiHelper.patch(`${ENDPOINT_ORDERS}/${data["id"]}`, data["data"])
    }, {
    onSuccess: () => {
      dispatch(showSuccessAlert("Order Updated successfully"));
    },
    onError: (error) => {
      dispatch(showErrorAlert(error));
    },
  }
  )
}

export const RepoUpdateMyOrder = () => {
  const dispatch = useDispatch();

  return useMutation((order) =>
    AxiosApiHelper.patch(ENDPOINT_ORDERS + "/" + order["_id"], order), {
    onSuccess: () => {
      dispatch(showSuccessAlert("Order updated successfully"));
    },
    onError: (error) => {
      dispatch(showErrorAlert(error));
    },
  }
  );
}

export const RepoDeleteOrder = () => {
  const dispatch = useDispatch();
  return useMutation((id) => AxiosApiHelper.delete(ENDPOINT_ORDERS + "/" + id),
    {
      onSuccess: () => {
        dispatch(showSuccessAlert("Order deleted successfully"));
      },
      onError: (error) => {
        dispatch(showErrorAlert(error));
      },
    }
  );
};
