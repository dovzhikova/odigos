package nodecollectorsgroup

import (
	"context"

	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

type instrumentationConfigController struct {
	client.Client
	Scheme *runtime.Scheme
}

func (r *instrumentationConfigController) Reconcile(ctx context.Context, _ ctrl.Request) (ctrl.Result, error) {
	err := sync(ctx, r.Client)
	return ctrl.Result{}, err
}
